const prices = [
    {
        "good_id": 9,
        "item_name": "Apples, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 370.83,
        "avg": 860.5,
        "max": 1587.86,
        "usd": {
            "min": "2.73",
            "avg": "6.34",
            "max": "11.70"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 10,
        "item_name": "Banana, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 167.26,
        "avg": 397.24,
        "max": 952.94,
        "usd": {
            "min": "1.23",
            "avg": "2.93",
            "max": "7.02"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 11,
        "item_name": "Beef Round or Equivalent Back Leg Red Meat, 1 kg ",
        "category_id": 4,
        "category_name": "Markets",
        "min": 1058.57,
        "avg": 2716.86,
        "max": 5293.97,
        "usd": {
            "min": "7.80",
            "avg": "20.02",
            "max": "39.00"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 12,
        "item_name": "Bottle of Wine, Mid-Range Price",
        "category_id": 4,
        "category_name": "Markets",
        "min": 634.92,
        "avg": 1482.22,
        "max": 2646.44,
        "usd": {
            "min": "4.68",
            "avg": "10.92",
            "max": "19.50"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 13,
        "item_name": "Chicken Breasts, Boneless and Skinless, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 529.29,
        "avg": 974.95,
        "max": 1694.6,
        "usd": {
            "min": "3.90",
            "avg": "7.18",
            "max": "12.48"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 14,
        "item_name": "Domestic Beer, 0.5 liter Bottle",
        "category_id": 4,
        "category_name": "Markets",
        "min": 211.27,
        "avg": 353.23,
        "max": 529.29,
        "usd": {
            "min": "1.56",
            "avg": "2.60",
            "max": "3.90"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 15,
        "item_name": "Eggs, 12 pack",
        "category_id": 4,
        "category_name": "Markets",
        "min": 201.37,
        "avg": 274,
        "max": 380.73,
        "usd": {
            "min": "1.48",
            "avg": "2.02",
            "max": "2.80"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 17,
        "item_name": "Lettuce, 1 head",
        "category_id": 4,
        "category_name": "Markets",
        "min": 126.54,
        "avg": 210.17,
        "max": 315.81,
        "usd": {
            "min": "0.93",
            "avg": "1.55",
            "max": "2.33"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 18,
        "item_name": "Loaf of Fresh White Bread, 0.5 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 126.54,
        "avg": 236.58,
        "max": 529.29,
        "usd": {
            "min": "0.93",
            "avg": "1.74",
            "max": "3.90"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 19,
        "item_name": "Local Cheese, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 529.29,
        "avg": 1718.81,
        "max": 3176.82,
        "usd": {
            "min": "3.90",
            "avg": "12.66",
            "max": "23.40"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 20,
        "item_name": "Milk, Regular,1 liter",
        "category_id": 4,
        "category_name": "Markets",
        "min": 180.46,
        "avg": 213.48,
        "max": 265.19,
        "usd": {
            "min": "1.33",
            "avg": "1.57",
            "max": "1.95"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 21,
        "item_name": "Onion, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 211.27,
        "avg": 353.23,
        "max": 634.92,
        "usd": {
            "min": "1.56",
            "avg": "2.60",
            "max": "4.68"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 22,
        "item_name": "Oranges, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 211.27,
        "avg": 674.54,
        "max": 1800.24,
        "usd": {
            "min": "1.56",
            "avg": "4.97",
            "max": "13.26"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 23,
        "item_name": "Pack of Cigarettes",
        "category_id": 4,
        "category_name": "Markets",
        "min": 529.29,
        "avg": 550.19,
        "max": 603.01,
        "usd": {
            "min": "3.90",
            "avg": "4.05",
            "max": "4.44"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 24,
        "item_name": "Potato, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 158.46,
        "avg": 420.35,
        "max": 1058.57,
        "usd": {
            "min": "1.17",
            "avg": "3.10",
            "max": "7.80"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 25,
        "item_name": "White Rice, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 318.01,
        "avg": 557.9,
        "max": 1058.57,
        "usd": {
            "min": "2.34",
            "avg": "4.11",
            "max": "7.80"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 26,
        "item_name": "Tomato, 1 kg",
        "category_id": 4,
        "category_name": "Markets",
        "min": 316.91,
        "avg": 726.26,
        "max": 1587.86,
        "usd": {
            "min": "2.33",
            "avg": "5.35",
            "max": "11.70"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 27,
        "item_name": "Water, 1.5 liter Bottle",
        "category_id": 4,
        "category_name": "Markets",
        "min": 95.73,
        "avg": 133.15,
        "max": 211.27,
        "usd": {
            "min": "0.71",
            "avg": "0.98",
            "max": "1.56"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 58,
        "item_name": "Water, 0.33 liter Bottle",
        "category_id": 4,
        "category_name": "Markets",
        "min": 105.64,
        "avg": 114.44,
        "max": 211.27,
        "usd": {
            "min": "0.78",
            "avg": "0.84",
            "max": "1.56"
        },
        "measure": "money",
        "currency_code": "JPY"
    },
    {
        "good_id": 68,
        "item_name": "Imported Beer, 0.33 liter Bottle",
        "category_id": 4,
        "category_name": "Markets",
        "min": 211.27,
        "avg": 388.44,
        "max": 565.61,
        "usd": {
            "min": "1.56",
            "avg": "2.86",
            "max": "4.17"
        },
        "measure": "money",
        "currency_code": "JPY"
    }
]

export default prices;