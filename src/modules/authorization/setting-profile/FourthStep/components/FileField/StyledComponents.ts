import styled from 'styled-components';

export const File = styled.div`
  margin-left: 15px;

  & > h4 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const AddButton = styled.label`
  display: block;
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25) inset;
  background-color: #1e1e1e;
  width: fit-content;
  cursor: pointer;
  border-radius: 5px;
`;

export const FilePreview = styled.div`
  position: relative;
  width: fit-content;

  .close-file-preview-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }

  &:hover {
    .close-file-preview-button {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;
