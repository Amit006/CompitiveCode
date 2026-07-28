def josephus(people: list[int], k: int, start: int = 0) -> int:
    """
    Solves the Josephus problem for a given number of people and step size k.
    
    :param people: A list of people (their identifiers) in the circle.
    :param k: The step size (every k-th person will be eliminated).
    :return: The position of the last remaining person (0-indexed).
    """
    if len(people) == 1:
        return start
    
    out = (start + k - 1) % len(people)
    print(f"Eliminating person at index {out} (ID: {people[out]})")
    people.pop(out)

    return josephus(people, k, out)



josephus([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)  # Example usage

