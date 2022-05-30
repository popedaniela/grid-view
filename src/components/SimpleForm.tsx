import React, { FC, MouseEventHandler } from "react";
import {
	StyledFormWrapper,
	StyledFlex,
	StyledInputWrapper,
	StyledInput,
	StyledErrorMessage,
	StyledButton
} from '../styles/SimpleForm.style';
import { useForm } from "react-hook-form";
import { validateEmail } from "../utils/validator";

interface SimpleFormProps {
	handleClick: MouseEventHandler,
}

const SimpleForm:FC <SimpleFormProps> = ({handleClick}) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
		handleClick(data);
		reset();
	}

	return (
		<StyledFormWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<StyledFlex>
					<StyledInputWrapper>
						<StyledInput
							name="title"
							placeholder="Title *"
							type="string"
							{...register('title', {required: true})}
						/>
						<StyledErrorMessage>{errors.title && 'Title is required'}</StyledErrorMessage>
					</StyledInputWrapper>
					<StyledInputWrapper>
					<StyledInput
						name="description"
						placeholder="Description *"
						type="string"
						{...register('description', {required: true})}
					/>
						<StyledErrorMessage>{errors.description && 'Description is required'}</StyledErrorMessage>
					</StyledInputWrapper>
					<StyledInputWrapper>
					<StyledInput
						name="imagePath"
						placeholder="Image URL *"
						type="string"
						{...register('imagePath', {
							required: true,
							validate: validateEmail,
						})}
					/>
						<StyledErrorMessage>
							{errors.imagePath && errors.imagePath.type === 'required' && 'Image URL is required'}
							{errors.imagePath && errors.imagePath.type === 'validate' && 'The value is not a valid URL'}
						</StyledErrorMessage>
					</StyledInputWrapper>
				</StyledFlex>
				<div>
					<small>* Required</small> </div>
				<div>
					<StyledButton type="submit" value="Add new item"/>
				</div>
			</form>
		</StyledFormWrapper>
	)
}

export default SimpleForm;