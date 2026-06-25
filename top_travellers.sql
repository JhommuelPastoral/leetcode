# Write your MySQL query statement below

SELECT u.name,
    CASE
        WHEN SUM(r.distance) is NULL THEN 0
        ELSE SUM(r.distance)
    END as travelled_distance FROM Users as u
LEFT JOIN Rides as r ON u.id = r.user_id 
GROUP BY u.id 
ORDER BY travelled_distance DESC, name ASC

