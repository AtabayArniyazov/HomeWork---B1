�������� ������� B1 (����� ��������� ������ ������)
���������� ������ MOOD ���, ����� ����� �� �����������. 
��� �������� ���������� ������ ������������ ���.

������ MOOD:

<script>

    function RandomDiap(N,M)
    {
        return Math.floor(Math.random()*(M-N+1))+N;
    }

    function Mood(ColorsCount)
    {
        var ColorsA=[ '', '�������', '���������', '�����', '������', '�������', '�����', '����������' ];

        console.log( '������: ' + ColorsCount );
        for ( var i=1; i<=ColorsCount; i++ )
        {
            var N=RandomDiap(1,7);
            var ColorName=ColorsA[N];
            console.log( ColorName );
        }
    }

    Mood(3);

</script>