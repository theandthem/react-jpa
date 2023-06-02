/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Clothes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClothesUpdateFormInputValues = {
    type?: string;
    notes?: string;
    date?: string;
};
export declare type ClothesUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClothesUpdateFormOverridesProps = {
    ClothesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClothesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClothesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    clothes?: Clothes;
    onSubmit?: (fields: ClothesUpdateFormInputValues) => ClothesUpdateFormInputValues;
    onSuccess?: (fields: ClothesUpdateFormInputValues) => void;
    onError?: (fields: ClothesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClothesUpdateFormInputValues) => ClothesUpdateFormInputValues;
    onValidate?: ClothesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClothesUpdateForm(props: ClothesUpdateFormProps): React.ReactElement;
