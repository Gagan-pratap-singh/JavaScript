const hero =["Thor","IronMan","spiderMap"]
const DC_hero = ["SuperMan","BatMan"]

hero.push(DC_hero)
//console.log(hero)
//console.log(hero[3][1])
//We can use concat
const all_new_hero = [...DC_hero,...hero]

console.log(all_new_hero)