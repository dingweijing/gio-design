// import { PickerPanelDateProps } from 'rc-picker/lib/PickerPanel';

// export type DatePickerProps = Omit<PickerPanelDateProps<Date>, 'generateConfig' | 'prefixCls' | 'locale'>;

export interface DatePickerProps {
  /**
   * Specify the date that cannot be selected
   */
  disabledDate?: (date: Date) => boolean;
  /**
   * Callback function, can be executed when the selected time is changing
   */
  onSelect?: (value: Date) => void;
}
