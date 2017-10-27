package model;

import java.util.ArrayList;

public class Sorter {



    public void selectionSorting(int[] lst){
        int index = 0;
        int smallest;
        int temp;
        int size = lst.length;
        for(int i=0; i<size; i++){
            smallest = lst[i];
            for(int j= i; j< size;j++){
                if(lst[j] < smallest){
                    smallest = lst[j];
                    index = j;
                }
                temp = lst[i];
                lst[i] = smallest;
                lst[index] = temp;
            }
        }

    }

    public int findSmallest(ArrayList<Integer> lst) {
        int smallest = lst.get(0);

        for (Integer n: lst){
            if(n < smallest){
                smallest = n;
            }
        }

    return smallest;
    }

}
