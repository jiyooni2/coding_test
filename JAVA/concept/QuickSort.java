package JAVA.concept;

import java.util.Arrays;

public class QuickSort {
  // 기준 데이터(pivot)을 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 swap

  public static void main(String[] args) {
    int[] arr = {5, 7, 9, 0, 3, 1, 6, 2, 4, 8};

    quickSort(arr, 0, arr.length - 1);
    System.out.println("Arrays.toString(arr) = " + Arrays.toString(arr));
  }

  public static void quickSort(int[] arr, int start, int end) {
    if (start >= end) {
      return;
    }

    int pivot = start;
    int left = start + 1;
    int right = end;

    while (left <= right) {
      while (left <= end && arr[left] <= arr[pivot]) {
        left++;
      }

      while (right > start && arr[right] >= arr[pivot]) {
        right--;
      }

      if (left > right) {
        int temp = arr[right];
        arr[right] = arr[pivot];
        arr[pivot] = temp;
      } else {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
      }
    }

    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
  }
}
