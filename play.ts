console.log("hi")

class Jumpable {
  jump() { return 1 }
}

class Duckable {
  duck() {}
}

interface Number extends Jumpable, Duckable {}

applyMixins(Number, [Jumpable, Duckable]);

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

console.log(1.0.jump())