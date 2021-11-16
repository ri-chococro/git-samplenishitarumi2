export class Student {
  constructor(private _firstName: string, private _gender: number) {}

  public get name(): string {
    return this._firstName;
  }

  public set name(name: string) {
    this._firstName = name;
  }

  public get id(): number {
    return this._gender;
  }

  public set id(id: number) {
    this._gender = id;
  }
}
