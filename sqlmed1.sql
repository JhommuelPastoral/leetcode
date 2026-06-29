select
  concat(first_name, " ", last_name) as patient_name,
  ROUND((height / 30.48),1) as `height "Feet"`,
  round((weight * 2.205),0) as `weight "Pound"`,
  birth_date,
  CASE
  	WHEN gender = "M" THEN "MALE"
    ELSE "FEMALE"
  END AS gender_type
  from patients