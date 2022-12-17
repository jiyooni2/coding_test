package JAVA.programmers;

import java.util.ArrayList;

public class Q42860 {
  public static void main(String[] args) {
    String name = "AAAAA";

    int answer = 0;

    char[] nameArr = name.toCharArray();

    ArrayList<Integer> notA = new ArrayList<>();

    for (int i = 0; i < nameArr.length; i++) {
      if (nameArr[i] != 'A') {
        notA.add(i);
      }
    }

    for (int i = 0; i < nameArr.length; i++) {
      answer += Math.min(nameArr[i] - 'A', 'Z' - nameArr[i] + 1);
    }

    System.out.println(notA);

    // 1. notA.get(notA.size()-1)
    // 2. nameArr.length-notA.get(0)
    // 3. 각 턴에서 돌아가기

    int minMove;
    if (notA.size() == 0) {
      minMove = 0;
    } else {
      minMove = Math.min(notA.get(notA.size() - 1), nameArr.length - notA.get(0));
    }

    for (int i = 0; i < notA.size() - 1; i++) {
      int move =
          Math.min(
              notA.get(i) * 2 + nameArr.length - notA.get(i + 1),
              (nameArr.length - notA.get(i + 1)) * 2 + notA.get(i));
      System.out.println("처음에 돌아가기" + (notA.get(i) * 2 + nameArr.length - notA.get(i + 1)));
      System.out.println("뒤로 돌아가기" + ((nameArr.length - notA.get(i + 1)) * 2 + notA.get(i)));
      System.out.println("move = " + move);
      minMove = Math.min(move, minMove);
    }

    System.out.println("minMove = " + minMove);
  }
}
