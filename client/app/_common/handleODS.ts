export enum ODSColors {
    ODS_1 = 'bg-red-500',
    ODS_2 = 'bg-yellow-500',
    ODS_3 = 'bg-green-500',
    ODS_4 = 'bg-[#c41f2d]',
    ODS_5 = 'bg-[#ec402a]',
    ODS_6 = 'bg-[#24bce1]',
    ODS_7 = 'bg-orange-500',
    ODS_8 = 'bg-purple-500',
    ODS_9 = 'bg-teal-500',
    ODS_10 = 'bg-indigo-500',
    ODS_11 = 'bg-gray-500',
    ODS_12 = 'bg-lime-500',
    ODS_13 = 'bg-[#3e7d44]',
    ODS_14 = 'bg-[#1795d2]',
    ODS_15 = 'bg-[#5bb846]',
    ODS_16 = 'bg-blue-700',
    ODS_17 = 'bg-indigo-800'
}

export const getODSColor = (ods: number): string => {
    return ODSColors[`ODS_${ods}` as keyof typeof ODSColors] || 'bg-gray-500';
};

export enum ODSBgColors {
    ODS_1 = 'bg-red-100',
    ODS_2 = 'bg-yellow-100',
    ODS_3 = 'bg-green-100',
    ODS_4 = 'bg-[#f3cccc]',
    ODS_5 = 'bg-[#f8d1cb]',
    ODS_6 = 'bg-[#b3eaf4]',
    ODS_7 = 'bg-orange-100',
    ODS_8 = 'bg-purple-100',
    ODS_9 = 'bg-teal-100',
    ODS_10 = 'bg-indigo-100',
    ODS_11 = 'bg-gray-100',
    ODS_12 = 'bg-lime-100',
    ODS_13 = 'bg-[#d1e4d5]',
    ODS_14 = 'bg-[#b3dff2]',
    ODS_15 = 'bg-[#d0edcd]',
    ODS_16 = 'bg-blue-100',
    ODS_17 = 'bg-indigo-200'
}

export const getODSBgColor = (ods: number): string => {
    return ODSBgColors[`ODS_${ods}` as keyof typeof ODSBgColors] || 'bg-gray-200';
};

export const getODSTitle = (ods: number): string => {
    switch (ods) {
        case 1:
            return "Erradicação da Pobreza";
        case 2:
            return "Fome Zero e Agricultura Sustentável";
        case 3:
            return "Saúde e Bem-Estar";
        case 4:
            return "Educação de Qualidade";
        case 5:
            return "Igualdade de Gênero";
        case 6:
            return "Água Potável e Saneamento";
        case 7:
            return "Energia Limpa e Acessível";
        case 8:
            return "Trabalho Decente e Crescimento Econômico";
        case 9:
            return "Indústria, Inovação e Infraestrutura";
        case 10:
            return "Redução das Desigualdades";
        case 11:
            return "Cidades e Comunidades Sustentáveis";
        case 12:
            return "Consumo e Produção Responsáveis";
        case 13:
            return "Ação contra a Mudança Global do Clima";
        case 14:
            return "Vida na Água";
        case 15:
            return "Vida Terrestre";
        case 16:
            return "Paz, Justiça e Instituições Eficazes";
        case 17:
            return "Parcerias e Meios de Implementação";
        default:
            return "ODS Desconhecida";
    }
};

export const getODSDescription = (ods: number): string => {
    switch (ods) {
        case 1:
            return "Erradicação da pobreza em todas as suas formas, em todos os lugares.";
        case 2:
            return "Acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.";
        case 3:
            return "Garantir uma vida saudável e promover o bem-estar para todos, em todas as idades.";
        case 4:
            return "Assegurar a educação inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.";
        case 5:
            return "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.";
        case 6:
            return "Garantir disponibilidade e gestão sustentável da água e saneamento para todos.";
        case 7:
            return "Garantir acesso a energia barata, confiável, sustentável e renovável para todos.";
        case 8:
            return "Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo, e o trabalho decente para todos.";
        case 9:
            return "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável, e fomentar a inovação.";
        case 10:
            return "Reduzir as desigualdades dentro dos países e entre eles.";
        case 11:
            return "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.";
        case 12:
            return "Assegurar padrões de produção e de consumo sustentáveis.";
        case 13:
            return "Tomar medidas urgentes para combater a mudança climática e seus impactos.";
        case 14:
            return "Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável.";
        case 15:
            return "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.";
        case 16:
            return "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, fornecer acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.";
        case 17:
            return "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.";
        default:
            return "Descrição não disponível para esta ODS.";
    }
};