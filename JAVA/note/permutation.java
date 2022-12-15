package JAVA.note;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class permutation {
    public static void main(String[] args) {
        List<List<Integer>> result = listPermutations(new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4)));
        System.out.println(result);
    }

    public static List<List<Integer>> listPermutations(List<Integer> list) {

        if (list.size() == 0) {
            List<List<Integer>> result = new ArrayList<List<Integer>>();
            result.add(new ArrayList<Integer>());
            return result;
        }

        List<List<Integer>> returnMe = new ArrayList<List<Integer>>();

        Integer firstElement = list.remove(0);

        List<List<Integer>> recursiveReturn = listPermutations(list);
        for (List<Integer> li : recursiveReturn) {

            for (int index = 0; index <= li.size(); index++) {
                List<Integer> temp = new ArrayList<Integer>(li);
                temp.add(index, firstElement);
                returnMe.add(temp);
            }

        }
        return returnMe;
    }
}
