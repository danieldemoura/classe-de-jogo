class Hero {
    constructor(name, age, type) {
        this.name = name,
        this.age = age,
        this.type = type,
        this.attack = null
    }

    setHeroAttackType() {
        switch(this.type) {
            case "mago":
                this.attack = "mágia";
                break
            case "guerreiro": 
                this.attack = "espada";
                break
            case "monge":
                this.attack = "artes marciais";
                break
            case "ninja":
                this.attack = "shuriken";
                break
            default:
                // Esse é um ataque gênerico que será usado sempre que o heroi especificado não corresponder aos do case do switch
                this.attack = "lótus verde da furia de Buda";
        }
    }

    attackEnemy() {
        this.setHeroAttackType();
        console.log(`O ${this.type} atacou usando ${this.attack}`);
    }

    showHeroAge() {
        console.log(`O herói ${this.type} tem ${this.age} anos de idade`);
    }
}


const mago = new Hero("Shi Hao", 34, "mago");
mago.attackEnemy();

const guerreiro = new Hero("Luo Fang", 29, "guerreiro");
guerreiro.attackEnemy();

const monge = new Hero("Buda", 45, "monge");
monge.attackEnemy();

const ninja = new Hero("Tang San", 32, "ninja");
ninja.attackEnemy();

const cultivadorImortal = new Hero("Xiao Yan", 30, "cultivador");
cultivadorImortal.attackEnemy();

guerreiro.showHeroAge();
cultivadorImortal.showHeroAge();