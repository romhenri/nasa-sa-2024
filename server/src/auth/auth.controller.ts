import { Controller, Post, Body, UseGuards, Request, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: any) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      throw new Error('Usuário ou senha inválidos');
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  getProtectedRoute(@Request() req) {
    return { message: 'Você acessou uma rota protegida!', user: req.user };
  }
}
