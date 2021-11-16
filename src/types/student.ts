export class Student {
  constructor(private _club: string, private _committee: number) {}

  public get club(): string {
    return this._club;
  }

  public set club(club: string) {
    this._club = club;
  }

  public get committee(): number {
    return this._committee;
  }

  public set committee(committee: number) {
    this._committee = committee;
  }
}
