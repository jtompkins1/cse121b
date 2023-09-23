// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    let damage = Math.random();
    if (damage > .5){
        return true;
    }
    else{
        return false;
    }
    // or like this
    // return Math.random() > 0.5;
}

function shipCanFire(){
    if (shipHealth > 0 && shipAmmo > 0){
        return true;
    }
    else{
        return false;
    }
    // or like this
    // return shipAmmo > 0 && shipHealth > 0;
}

function isDestroyed(health){
    return health <= 0;
    // if (shipHealth <= 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}

function reloadShip(){
    shipHealth--;
    shipAmmo += 3;
}
