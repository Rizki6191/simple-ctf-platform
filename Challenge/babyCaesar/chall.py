def caesar_encrypt(text, shift):
    result = ""
    for c in text:
        if c.isalpha():
            base = ord('a') if c.islower() else ord('A')
            result += chr((ord(c) - base + shift) % 26 + base)
        else:
            result += c
    return result

if __name__ == "__main__":
    flag = "CTF{FAKE_FLAG_EXAMPLE}"
    print(caesar_encrypt(flag, 3))

# FWIS{f4h54u_f1sk3u}

