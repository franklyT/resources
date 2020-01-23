function splatMax(...$nums)
{
    return array_reduce($nums, function ($num1, $num2) {
        return $num1 >= $num2 ? $num1 : $num2;
    });
}
