def remove_adj_char(given_string):
    return ''.join(char for char, s in zip(given_string, given_string[1:]+" ") if s != char)

print(remove_adj_char('sajjad'))