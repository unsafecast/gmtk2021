#include <raylib.h>
#include <emscripten/emscripten.h>

void update() {
    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawRectangle(100, 100, 100, 100, BLUE);
    EndDrawing();
}

int main() {
    InitWindow(800, 600, "Henlo");
    emscripten_set_main_loop(update, 0, 1);

    return 0;
}
