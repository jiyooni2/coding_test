package JAVA.programmers;

import java.util.ArrayList;

public class Q12906 {
  public int[] solution(int[] arr) {
    ArrayList<Integer> answerList = new ArrayList();

    for (int i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) {
        continue;
      }
      answerList.add(arr[i]);
    }

    int[] answer = new int[answerList.size()];
    for (int i = 0; i < answer.length; i++) {
      answer[i] = answerList.get(i);
    }

    return answer;
  }
}
