import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private users: { id: number; username: string; password: string }[] = [];

  constructor(private readonly jwtService: JwtService) {
    this.initializeUsers();
  }

  private async initializeUsers() {
    const rawUsers = [
      { id: 1, username: 'romhenri', password: 'romhenri' },
      { id: 2, username: 'poc', password: '123' },
      { id: 3, username: 'admin', password: 'admin' },
    ];

    for (const user of rawUsers) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      this.users.push({ id: user.id, username: user.username, password: hashedPassword });
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((user) => user.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      jwt_token: this.jwtService.sign(payload),
    };
  }
}
