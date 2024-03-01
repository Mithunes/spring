#include<stdio.h>
#include<stdlib.h>


struct node
{
    int data;
    struct node*next;
};
void insert_beg(struct node**v,int data)
{
    struct node *nn;
    nn=(struct node*)malloc(sizeof(struct node));
    nn->data=data;
    nn->next=NULL;

if(*v==NULL)
{
    *v=nn;
}
else{
    nn->next=*v;
    *v=nn;
}
}
void append(struct node**v,int data)
{
    struct node *nn;
    nn=(struct node*)malloc(sizeof(struct node));
    nn->data=data;
    nn->next=NULL;

if(*v==NULL)
{
    *v=nn;
}
else{
        struct node * temp;
    temp =*v;
    while(temp->next!=NULL)
    {

        temp = temp->next;
        temp->next=nn;
    }

}
}
void display(struct node* head){
    struct node * temp;
    temp =head;
    while(temp!=NULL)
    {
        printf("%d",temp->data);
        temp = temp->next;
    }
}
int main()
{
    struct node *head = NULL;
    insert_beg(&head,77);
    insert_beg(&head,85);
    append(&head,99);
    display(head);

}
