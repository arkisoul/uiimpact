export class Car {
  wheels: number = 4;
  steering: number = 1;
  brakes: number = 2;

  getSpecs(): string {
    return `
        I have ${this.wheels} wheels.
        I have ${this.steering} streeing.
        I have ${this.brakes} brakes.
        `;
  }
}

export class CarManufacturer extends Car {
  protected name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

export class CarBrand extends CarManufacturer {
  private brandName: string;
  private price: number;
  private _isWorking: boolean = true;

  constructor(name: string, brandName: string, price: number) {
    super(name);
    this.brandName = brandName;
    this.price = price;
  }

  override getName(): string {
    return `${super.getName()} ~ ${this.brandName}`;
  }

  getPrice(): string {
    return `Price of ${this.brandName} is ${this.price}`;
  }

  set isWorking(value: boolean) {
    this._isWorking = value;
  }

  get isWorking(): boolean {
    return this._isWorking;
  }

  sayHello(first: number): void
  sayHello(first: string): void
  sayHello(): void
  {
    console.log();
  }

  static sayHalo(
    first: string | number,
    second?: number,
    third?: boolean
  ): string | number {
    if (second) {
      return second;
    }
    return first;
  }
}

CarBrand.sayHalo("Halo");
CarBrand.sayHalo(100);
CarBrand.sayHalo("Halo", 20);
CarBrand.sayHalo(100, 20);
CarBrand.sayHalo("Halo", 20, false);
CarBrand.sayHalo(100, 20, false);
