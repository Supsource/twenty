import { useRecoilCallback } from 'recoil';

import { activeDropdownFocusIdState } from '@/ui/layout/dropdown/states/activeDropdownFocusIdState';
import { previousDropdownFocusIdState } from '@/ui/layout/dropdown/states/previousDropdownFocusIdState';

export const useGoBackToPreviousDropdownFocusId = () => {
  const goBackToPreviousDropdownFocusId = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const previouslyFocusedDropdownId = snapshot
          .getLoadable(previousDropdownFocusIdState)
          .getValue();

        set(activeDropdownFocusIdState, previouslyFocusedDropdownId);
        set(previousDropdownFocusIdState, null);
      },
    [],
  );

  return {
    goBackToPreviousDropdownFocusId,
  };
};