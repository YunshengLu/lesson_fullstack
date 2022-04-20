function func(num){
    this.count++;
}

func.count = 0;
func(1);
console.log(func.count); // 0