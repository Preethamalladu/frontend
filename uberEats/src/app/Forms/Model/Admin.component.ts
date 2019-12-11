export class Admin {
  constructor(
      public Id: number = 0,
      public firstName: string = '',
      public lastName: string = '',
      public phone: string = '',
      public email: string = '',
      public password: string = '',
      public city: string = '',
      public userRole: string = 'admin'
  ) { }
}
