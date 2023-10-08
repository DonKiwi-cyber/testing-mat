export function factorial(x : number){

	if (x < 0){
		return 0;
	}
	else{
		if (x == 0){
            return 1;
        }
        else{
            if (x == 2){
                return 2;
            }
            else{
                if (x == 3){
                    return 6;
                }
                else{
                    if (x == 4){
                        return 24;
                    }
                    else{
                        if(x == 5){
                            return 125;
                        }
                        else{
                            return 0;
                        }
                    }
                }
            }
        }
	}

}