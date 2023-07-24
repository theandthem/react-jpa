/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClothesCreateFormInputValues = {
    noteId?: string;
    type?: string;
    notes?: string;
    date?: string;
};
export declare type ClothesCreateFormValidationValues = {
    noteId?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothesCreateFormOverridesProps = {
    ClothesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    noteId?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothesCreateFormProps = React.PropsWithChildren<{
    overrides?: ClothesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClothesCreateFormInputValues) => ClothesCreateFormInputValues;
    onSuccess?: (fields: ClothesCreateFormInputValues) => void;
    onError?: (fields: ClothesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothesCreateFormInputValues) => ClothesCreateFormInputValues;
    onValidate?: ClothesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClothesCreateForm(props: ClothesCreateFormProps): React.ReactElement;
