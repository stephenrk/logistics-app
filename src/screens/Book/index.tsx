import React from 'react'
import { FlatList } from 'react-native'

import {
    Container,
    HeaderTitle,
    SearchInput,
    SearchInputWrapper,
    SearchLabelWrapper,
    SearchInputIcon,
    SearchLabel,
    BookListContainer,
    BookListHeader,
    Period,
    SortBy,
    BookItem,
    BookItemHeader,
    NavigateIcon,
    DeliveryInfo,
    Price,
    PriceContainer,
    BookItemRoutes,
    Timeline,
    BookItemRoute,
    RouteOriginIcon,
    RouteDeliveryDate,
    RouteTitle,
    RouteDestinationIcon
} from './styles'

export const Book = () => {
    return (
        <Container>
            <HeaderTitle>Book</HeaderTitle>
            
            <SearchInputWrapper>
                <SearchInputIcon name="search" />
                <SearchLabelWrapper>
                    <SearchLabel>Loads</SearchLabel>
                    <SearchInput />
                </SearchLabelWrapper>
            </SearchInputWrapper>

            <BookListContainer>
                <BookListHeader>
                    <Period>Today</Period>
                    <SortBy>Sort: Suggested</SortBy>
                </BookListHeader>
            </BookListContainer>

            <BookItem>
                <BookItemHeader>
                    <PriceContainer>
                        <Price>$500</Price>
                    </PriceContainer>

                    <DeliveryInfo>53” Van - 42000 lbs - 200 mi</DeliveryInfo>

                    <NavigateIcon name="chevron-right" />
                </BookItemHeader>

                <BookItemRoutes>
                    <Timeline />

                    <BookItemRoute>
                        <RouteOriginIcon />
                        <RouteTitle>Rancho Santa Margarita, CA</RouteTitle>
                        <RouteDeliveryDate>Jun 09, 13:40 EST</RouteDeliveryDate>
                    </BookItemRoute>

                    <BookItemRoute>
                        <RouteDestinationIcon />
                        <RouteTitle>Rancho Santa Margarita, CA</RouteTitle>
                        <RouteDeliveryDate>Jun 09, 13:40 EST</RouteDeliveryDate>
                    </BookItemRoute>
                </BookItemRoutes>
            </BookItem>
        </Container>
    )
}
