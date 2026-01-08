# Baby Caesar

Kamu menemukan pesan terenkripsi berikut:
FWIS{f4h54u_f1sk3u} pada file chall.py


Pesan ini menggunakan **Caesar Cipher**, tetapi dengan pergeseran yang sangat kecil.

## Petunjuk
- Caesar Cipher menggeser huruf di alfabet
- Coba semua kemungkinan shift
- Format flag mengikuti pola standar CTF

## Catatan
- Huruf hanya terdiri dari `a-z`
- Tidak ada trik tambahan
- Ini benar-benar *baby challenge*

## Source Code

Berikut adalah script Python yang digunakan untuk mengenkripsi pesan asli:

```python
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

---

