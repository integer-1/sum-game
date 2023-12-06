import { Bodies, Body, Engine, Events, Render, Runner, World } from 'matter-js'
import { FRUITS } from './fruits.js'

const engine = Engine.create()
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: false,
    background: '#ebdadf',
    width: 620,
    height: 850,
  },
})

const world = engine.world

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: '#faa5bd' },
})

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: '#faa5bd' },
})

const ground = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: true,
  render: { fillStyle: '#faa5bd' },
})

const topLine = Bodies.rectangle(310, 150, 620, 2, {
  name: 'topLine',
  isStatic: true,
  isSensor: true,
  render: { fillStyle: '#faa5bd' },
})

World.add(world, [leftWall, rightWall, ground, topLine])

Render.run(render)
Render.run(engine)

let currentBody = null
let currentFruit = null
let disableAction = false
let interval = null

function addFruit() {
  const index = Math.floor(Math.random() * 5)
  const fruit = FRUITS[index]

  const body = Bodies.circle(300, 50, fruit.radius, {
    index: index,
    isSleeping: true,
    render: {
      sprite: { texture: `${fruit.name}.png` },
    },
    restitution: 0.2,
  })

  currentBody = body
  currentFruit = fruit

  World.add(world, body)
}

addFruit()
