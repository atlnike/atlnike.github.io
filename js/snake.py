<py-script>
from js import document
import random

canvas = document.getElementById('gameCanvas')
ctx = canvas.getContext('2d')
grid_size = 20
snake = [(100, 100)]
direction = (0, -grid_size)
food = (200, 200)

def draw():
    ctx.fillStyle = '#FF2800'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#FFF200'
    for x, y in snake:
        ctx.fillRect(x, y, grid_size - 2, grid_size - 2)
    ctx.fillStyle = '#111111'
    ctx.fillRect(food[0], food[1], grid_size - 2, grid_size - 2)

def update():
    global snake, direction, food
    head = (snake[0][0] + direction[0], snake[0][1] + direction[1])
    snake = [head] + snake[:-1]
    if head == food:
        snake.append(snake[-1])
        food = (random.randint(0, (canvas.width - grid_size) // grid_size) * grid_size,
                random.randint(0, (canvas.height - grid_size) // grid_size) * grid_size)

document.addEventListener('keydown', lambda e: globals().update(
    direction=(0, -grid_size) if e.key == 'ArrowUp' else
              (0, grid_size) if e.key == 'ArrowDown' else
              (-grid_size, 0) if e.key == 'ArrowLeft' else
              (grid_size, 0) if e.key == 'ArrowRight' else direction
))

def game_loop():
    draw()
    update()
    setTimeout(game_loop, 100)

game_loop()
</py-script>