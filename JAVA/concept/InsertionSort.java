package JAVA.concept;

import java.util.Arrays;

public class InsertionSort {
  // 대부분 정렬되어 있는 리스트에서 빠름 -> O(N)
  // 정렬되어 있는 데이터 리스트에서 적절한 위치를 찾은 뒤에 그 위치에 삽입

  // 정렬되지 않은 부분에서 하나를 뽑아 정렬된 곳에 적절히 넣음

  public static void main(String[] args) {
    int[] arr = {7, 5, 9, 0, 3, 1, 6, 2, 4, 8};

    for (int i = 1; i < arr.length; i++) {
      for (int j = i - 1; 0 <= j; j--) {
        if (arr[j] <= arr[j + 1]) {
          break;
        } else {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    System.out.println("arr = " + Arrays.toString(arr));
  }
}
