Домашнее задание B1 (Выбор случайных цветов радуги)
Доработать проект MOOD так, чтобы цвета не повторялись. 
Для контроля повторения цветов использовать хэш.

Проект MOOD:

<script>

    function RandomDiap(N,M)
    {
        return Math.floor(Math.random()*(M-N+1))+N;
    }

    function Mood(ColorsCount)
    {
        var ColorsA=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

        console.log( 'цветов: ' + ColorsCount );
        for ( var i=1; i<=ColorsCount; i++ )
        {
            var N=RandomDiap(1,7);
            var ColorName=ColorsA[N];
            console.log( ColorName );
        }
    }

    Mood(3);

</script>