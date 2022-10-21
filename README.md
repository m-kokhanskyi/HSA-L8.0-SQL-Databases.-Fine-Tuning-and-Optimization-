42 млн записів

> select count(*) from clients
> where birthday > '2019-10-28'
> and  birthday < '2020-10-29'

| Without index | With BTREE index | With 'HASH' index |
| :--- | :--- |:----------------|
| 6.1s | 0.375s | 0.300s          |

| innodb\_flush\_log\_at\_trx\_commit=0 | innodb\_flush\_log\_at\_trx\_commit=1 | innodb\_flush\_log\_at\_trx\_commit=2 |
| :--- | :--- | :--- |
| 0.07s | 0.10s | 0.08s |
