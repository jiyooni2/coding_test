package JAVA.concept;

import java.util.Arrays;

public class SelectionSort {
  public static void main(String[] args) {
    // O(n^2)
    // 정렬되지 않은 부분에서 가장 작은 데이터를 선택해 맨 앞의 데이터와 바꿈

    int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 4, 8};

    for (int i = 0; i < arr.length; i++) {
      int minIndex = i;
      for (int j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      int temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    System.out.println("arr = " + Arrays.toString(arr));
  }
}
