export abstract class Candy {
    abstract priceCents(): any;
    abstract name(): any;
}

class Fluffy extends Candy {
    priceCents() {
        return 99;
    }
    name() {
        return "Fluffy";
    }
}

class NotSoFluffy extends Candy {
    priceCents() {
        return 199;
    }
    name() {
        return "Not So Fluffy";
    }
}

class ExtraFluffy extends Candy {
    priceCents() {
        return 499;
    }
    name() {
        return "Extra Fluffy";
    }
}

export const availableCandies = [
    new Fluffy(),
    new NotSoFluffy(),
    new ExtraFluffy()
]