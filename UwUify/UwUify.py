import json
import random
from pynput import keyboard
from pynput.keyboard import Controller, Key
import re

def load_rules(file_name):
    with open(file_name, "r") as f:
        rules = json.load(f)
    return dict(sorted(rules.items(), key=lambda item: len(item[0]), reverse=True))

rules = load_rules("./rules.json")
spaces = load_rules("./spaces.json")

def apply_casing(template, replacement):
    if template.isupper():
        return replacement.upper()
    elif template[0].isupper():
        return replacement.capitalize()
    else:
        return replacement.lower()

def transform_text(rules, text):
    def replace_match(match):
        original = match.group(0)
        # Transform the text based on the rules
        transformed = rules[original.lower()]
        # Apply the correct casing to the transformed text
        return apply_casing(original, transformed)

    # Modify the regex to match partial words as well, not just whole words
    pattern = re.compile(r"(" + "|".join(map(re.escape, rules.keys())) + r")", re.IGNORECASE)
    
    # Apply the transformation to the entire text
    transformed_text = pattern.sub(replace_match, text)
    
    # Return the transformed text with an additional space at the end
    return transformed_text + " "

def inject_random_spaces(text):
    words = text.split(' ')
    new_words = []
    for i in range(len(words) - 1):
        word = words[i]
        if random.random() < 0.15:
            char_to_inject = random.choice(list(spaces.keys()))
            new_words.append(f"{word} {char_to_inject}")
        else:
            new_words.append(word)
    new_words.append(words[-1])
    return ' '.join(new_words)

def add_stutter(word):
    if word and word[0].isalpha():
        if random.random() < 0.15:
            return f"{word[0]}-{word}"
    return word

typed_buffer = ""
keyboard_controller = Controller()
ctrl_pressed = False

def on_press(key):
    global typed_buffer, ctrl_pressed
    try:
        if key in {Key.ctrl_l, Key.ctrl_r}:
            ctrl_pressed = True
            return

        if ctrl_pressed:
            return

        if hasattr(key, 'char') and key.char:
            typed_buffer += key.char

        elif key in {Key.space, Key.enter}:
            transformed = transform_text(rules, typed_buffer)
            transformed = inject_random_spaces(transformed)
            transformed = add_stutter(transformed)

            if transformed != typed_buffer:
                for _ in range(len(typed_buffer) + 1):
                    keyboard_controller.press(Key.backspace)
                    keyboard_controller.release(Key.backspace)

                keyboard_controller.type(transformed)

                if not transformed.endswith(" "):
                    keyboard_controller.type(" ")

            typed_buffer = ""

        elif key == Key.backspace:
            typed_buffer = typed_buffer[:-1]
    except Exception as e:
        print(f"Error: {e}")

def on_release(key):
    global ctrl_pressed
    if key in {Key.ctrl_l, Key.ctrl_r}:
        ctrl_pressed = False

with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
