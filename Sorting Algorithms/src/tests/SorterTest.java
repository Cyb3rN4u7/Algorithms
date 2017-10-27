package tests;

import model.Sorter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class SorterTest {

    private int[] list;
    private Sorter sorter;

    @BeforeEach
    public void setup(){

        sorter = new Sorter();

        list = new int[] {2,1,3,5,0,4,6,7};

    }





    @Test
    public void testSelectionSortingArray(){
        System.out.print("Before : ");
        System.out.println(Arrays.toString(list));
        sorter.selectionSorting(list);
        System.out.print("After  : ");
        System.out.println(Arrays.toString(list));

    }


}
