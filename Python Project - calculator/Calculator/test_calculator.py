
import pytest

from calculator import (
    calculate,
    increase_percentage,
    decrease_percentage,
    remove_vat
)


@pytest.mark.parametrize("expression, expected", [
    ("10 + 5", 15),
    ("10 - 5", 5),
    ("10 * 5", 50),
    ("10 / 5", 2),
    ("2 + 3 * 4", 14),
    ("(2 + 3) * 4", 20),
    ("-10 + 5", -5),
    ("2.5 + 1.5", 4)
])
def test_calculate(expression, expected):
    assert calculate(expression) == expected


@pytest.mark.parametrize("total, percent, expected", [
    (100, 10, 110),
    (100, 18, 118),
    (100, 25, 125),
    (12.34, 18, 14.56),
    (100, 0, 100),
    (0, 18, 0)
])
def test_increase_percentage(total, percent, expected):
    assert increase_percentage(total, percent) == expected


@pytest.mark.parametrize("total, percent, expected", [
    (100, 10, 90),
    (100, 25, 75),
    (100, 100, 0),
    (100, 0, 100)
])
def test_decrease_percentage(total, percent, expected):
    assert decrease_percentage(total, percent) == expected


@pytest.mark.parametrize("total, expected", [
    (118, 100),
    (236, 200),
    (59, 50),
    (0, 0)
])
def test_remove_vat(total, expected):
    assert remove_vat(total) == expected


def test_division_by_zero():
    with pytest.raises(ZeroDivisionError):
        calculate("10 / 0")


def test_invalid_expression():
    with pytest.raises(SyntaxError):
        calculate("10 +")


def test_empty_expression():
    with pytest.raises(SyntaxError):
        calculate("")


def test_unsupported_operation():
    with pytest.raises(ValueError):
        calculate("2 ** 3")


def test_unsafe_expression():
    with pytest.raises(ValueError):
        calculate("print('Hello')")
