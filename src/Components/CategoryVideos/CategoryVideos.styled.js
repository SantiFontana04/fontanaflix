import styled from "styled-components";

export const CategoryTitle = styled.h2`
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 2rem;
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
