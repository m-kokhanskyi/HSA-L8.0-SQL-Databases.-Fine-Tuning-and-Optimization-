42 млн записів

> select count(*) from clients
> where birthday > '2019-10-29'
> and  birthday < '2020-10-29'

| Without index | With BTREE index | With 'HASH' index |
| :--- | :--- |:----------------|
| 6.1s | 0.375s | 0.300s          |
