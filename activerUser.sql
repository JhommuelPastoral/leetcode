# Write your MySQL query statement below
SELECT act.activity_date as day, Count(DISTINCT act.user_id) as active_users
FROM Activity act
WHERE (activity_date > "2019-06-27" AND activity_date <= "2019-07-27")
GROUP BY activity_date;


