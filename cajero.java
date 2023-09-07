public static void shellSort(int[] arr) {
        int n = arr.length;
        
        // Empieza con un espacio grande, luego lo reduce
        for (int gap = n / 2; gap > 0; gap /= 2) {
            
            // Realiza el insertion sort para el espacio actual
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;
                
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                
                arr[j] = temp;
            }
        }