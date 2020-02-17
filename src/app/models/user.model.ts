export class UserModel {
  constructor(
    public email: string,
    public id: string,
    private token: string,
    private tokenExpDate: Date
  ) {}

  get getToken() {
    if (!this.tokenExpDate || new Date() > this.tokenExpDate) {
      return null;
    }
    return this.token;
  }
}
