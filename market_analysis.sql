SELECT u.user_id as buyer_id, u.join_date, COUNT(o.order_id) AS orders_in_2019
FROM Users as u
LEFT JOIN Orders AS o ON  o.buyer_id = u.user_id  AND YEAR(o.order_date) = '2019'
GROUP BY user_id