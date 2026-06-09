SELECT Products.product_name,SUM(Orders.unit) AS unit FROM Products
INNER JOIN Orders ON Orders.product_id = Products.product_id
WHERE MONTH(Orders.order_date) = 2 AND YEAR(Orders.order_date) = 2020
GROUP BY Products.product_name
HAVING SUM(Orders.unit) >= 100;