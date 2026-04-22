
items_raw = [
    ('sel-text b-red', '두번째 [static.selectable = text ]'), # r1
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r2
    ('sel-text b-red', '두번째 [static.selectable = text ]'), # r3
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r3
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r4
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r4
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r5
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r6
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r6
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r6
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r7
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r7
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r8
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r8
    ('sel-none b-blue', '세번째 [static.selectable = none ]'), # r8
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r9
    ('sel-none b-blue', '세번째 [static.selectable = none ]'), # r9
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r10
    ('sel-text b-red', '첫번째 [static.selectable = text ]'), # r11
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r11
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r12
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r12
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r13
    ('sel-none b-blue', '두번째 [static.selectable = none ]'), # r13
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r13
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r14
    ('sel-none b-blue', '세번째 [static.selectable = none ]'), # r14
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r15
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r16
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r16
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r17
    ('sel-text b-red', '두번째 [static.selectable = text ]'), # r17
    ('sel-text b-red', '세번째 [static.selectable = text ]'), # r17
    ('sel-none b-blue', '첫번째 [static.selectable = none ]'), # r18
    ('sel-text b-red', '두번째 [static.selectable = text ]')  # r18
]

prefixes = ["첫번째", "두번째", "세번째"]

output = []
for i, (cls, text) in enumerate(items_raw):
    row_idx = i // 3 + 1
    col_idx = i % 3
    if col_idx == 0:
        output.append(f"\n        <!-- row {row_idx} -->")
    
    # Replace prefix
    fixed_text = text
    for p in prefixes:
        fixed_text = fixed_text.replace(p, prefixes[col_idx])
    
    output.append(f'        <div class="sta-box {cls}">{fixed_text}</div>')

print('\n'.join(output))
